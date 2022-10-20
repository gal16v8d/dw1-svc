import { connect, connection } from 'mongoose';
import npmlog from 'npmlog';
import config from '../config/app.config';
import constants from '../constant/constant';

const connectDB = async () => {
  await connect(config.server.db)
    .then(() =>
      npmlog.info(constants.LOG.ROOT, `DB '${config.server.db}' is connected`)
    )
    .catch((err) =>
      npmlog.error(constants.LOG.ROOT, `can not connect to db error: ${err}`)
    );
};

const disconnectDB = async () => {
  await connection.close();
};

export { connectDB, disconnectDB };
