export const helpHttp = () => {
  const customFetch = async (endpoint, options) => {
    const defaultHeader = {
      accept: 'application/json',
    };

    // Manejador de errores de fetch
    const controller = new AbortController();

    options.signal = controller.signal;

    // METODO
    options.method = options.method || 'GET';

    // CABECERA
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    // CUERPO
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    // console.log(options);

    // SI NO SE PROCESA LA PETICION FETCH
    setTimeout(() => controller.abort(), 3000);

    //   PETICION FETCH
    try {
      const res = await fetch(endpoint, options);
      return await (res.ok
        ? await res.json()
        : Promise.reject({
            err: true,
            status: res.status || '00',
            statusText: res.statusText || 'Ocurrio un error',
          }));
    } catch (err) {
      return err;
    }
  };

  // LEER -> R
  const get = (url, options = {}) => customFetch(url, options);

  // CREAR -> C
  const post = (url, options = {}) => {
    options.method = 'POST';

    return customFetch(url, options);
  };

  // ACTUALIZAR -> U
  const put = (url, options = {}) => {
    options.method = 'PUT';

    return customFetch(url, options);
  };

  // ELIMINAR -> D
  const del = (url, options = {}) => {
    options.method = 'DELETE';

    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
