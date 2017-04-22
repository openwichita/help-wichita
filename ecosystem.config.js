module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    {
      name      : 'twitter',
      script    : 'services/twitter.js',
      env_production : {
        NODE_ENV: 'production'
      }
    }

  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    //production : {
    //  user : 'node',
    //  host : '212.83.163.1',
    //  ref  : 'origin/master',
    //  repo : 'git@github.com:repo.git',
    //  path : '/var/www/production',
    //  'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    //},
    dev : {
      user : 'seth',
      host : '192.241.221.238',
      ref  : 'origin/master',
      repo : 'git@github.com:openwichita/help-wichita.git',
      path : '/home/sethetter/code/help-wichita',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
}
