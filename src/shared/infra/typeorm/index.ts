import { createConnection, getConnectionOptions, Connection } from "typeorm";

// interface IOptions {
//   host: string;
// }

// getConnectionOptions().then((options) => {
//   const newOptions = options as IOptions;
//   newOptions.host = "database_ignite"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
//   createConnection({
//     ...options,
//   });
// });

// Podemos utilizar da maneira acima ou como foi feito nessa parte do código.
// Foi necessário fazer desta maneira, pois para criar seeds, é necessário de alguma maneira criar uma conexão.
export default async (host = "database_ignite"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host,
    })
  );
};
