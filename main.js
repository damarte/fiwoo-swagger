const swaggerCombine = require('swagger-combine');

const config = (module.exports = {
    swagger: '2.0',
    info: {
        title: 'FIWOO API',
        description: "",
        version: "1.0.0",
        contact: {
            email: "info@fiwoo.eu"
        },
        license: {
            name: "GNU-3.0",
            url: "https://opensource.org/licenses/GPL-3.0"
        }
    },
    host: "platform.fiwoo.eu",
    apis: [{
            url: 'https://platform.fiwoo.eu/api/device-management/swagger',
            paths: {
                base: '/api/device-management',
            },
        },
        {
            url: 'https://platform.fiwoo.eu/api/gis/swagger',
            paths: {
                base: '/api',
            },
        },
        {
            url: 'https://app.swaggerhub.com/apiproxy/schema/file/JIG_INTERNET/data-visualization/1.0.0/swagger.json',
            paths: {
                base: '/api/data-visualization',
            },
        },
    ],
    other: {},
});

if (!module.parent) {
    swaggerCombine(config, (err, res) => {
        if (err) console.error(err);
        else console.log(JSON.stringify(res, false, 2));
    });
}