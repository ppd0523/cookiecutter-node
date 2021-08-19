module.exports = (api)=>{
    const babelEnv = api.env();
    const babelVer = api.version;
    
    const presets = [
        [
            '@babel/env',
            {
                targets: "> 0.25%, not dead",
                useBuiltIns: 'usage',
                "corejs": 3,
            }
        ],
    ];

    return { presets };
}