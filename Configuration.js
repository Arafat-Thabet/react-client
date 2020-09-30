
const StageConfigurations = {
    dev: {
        api: {
            baseUrl: 'http://localhost/taskroken/'
        }
    },
    prod: {
        api: {
            baseUrl: 'https://task.hr.edialoguec.com/'
        }
    },
}

const Configuration = StageConfigurations

export default Configuration;
