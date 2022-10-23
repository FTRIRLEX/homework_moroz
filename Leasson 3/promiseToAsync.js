// TASK: Попробуйте изменять переменные и понаблюдать, что получится.
const secure = true;
const sendSuccessfully = false;

const createConnection = () => {
    console.log('Opening connection...');

    return new Promise((resolve) => {
        // выполняем асинхронный код внутри промиса и вызываем resolve() или reject()
        setTimeout(() => {
            const connection = {
                port: 80,
                secure,
                send: (data) => {
                    console.log(data);
                    return sendSuccessfully;
                },
                serializeData: (data) => JSON.stringify(data),
            };

            resolve(connection);
        }, 2000);
    });
};

function prepareData(data) {
    console.log('Preparing data...');

    return new Promise((resolve) => {
        // выполняем асинхронный код внутри промиса и вызываем resolve() или reject()
        data.prepared = true;
        setTimeout(() => resolve(data), 2000);
    });
}

function sendData(connection, data) {
    console.log('Sending data...');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!connection.secure) {
                return reject(new Error("Can't send data with insecure connection"));
            }
            if (!connection.send(data)) {
                return reject(new Error('Error during sending'));
            }
            resolve(data);
        }, 2000);
    });
}

const runFunctions = async () => {
    try {
        const innerFunc = async () => {
            const connection = await createConnection();
            const data = {
                status: 200,
                message: 'Hello, mister!',
                prepared: false,
            };

            const prepared = await prepareData(data, connection);
            const serialized = await connection.serializeData(prepared);
            const result = {
                data: serialized,
                connection,
            };
            return result;
        }
        const result = await innerFunc()
        const { data, connection } = result;
        await sendData(connection, data);
        console.log('Sent')
    }
    catch (error) {
        console.error(error)
    }
}

runFunctions()

