require('dotenv').config({silent:true})

export default {
  APP_NAME: process.env.APP_NAME || 'cognicity-server',
  API_FEEDS_QLUE_CITIES: (process.env.API_FEEDS_QLUE_CITIES || 'jabodetabek,bandung,surabaya').split(','),
  API_FEEDS_QLUE_DISASTER_TYPES: (process.env.API_FEEDS_QLUE_DISASTER_TYPES || 'flood').split(','),
  API_REPORTS_TIME_WINDOW: process.env.API_REPORTS_TIME_WINDOW || 3600,
  API_REPORTS_LIMIT: process.env.API_REPORTS_LIMIT,
  API_FLOODGAUGE_REPORTS_TIME_WINDOW: process.env.API_FLOODGAUGE_REPORTS_TIME_WINDOW || 43200,
  API_FLOODGAUGE_REPORTS_LIMIT: process.env.API_FLOODGAUGE_REPORTS_LIMIT,
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || 'https://data.petabencana.id',
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_ISSUER: process.env.AUTH0_ISSUER || 'https://petabencana.au.auth0.com',
  AUTH0_SECRET: process.env.AUTH0_SECRET,
  BODY_LIMIT: process.env.BODY_LIMIT || '100kb',
  CACHE: process.env.CACHE === 'true' || false,
<<<<<<< HEAD
  CACHE_DURATION_FLOODS: process.env.CACHE_DURATION_FLOODS || '1 hour',
  CACHE_DURATION_FLOODS_STATES: process.env.CACHE_DURATION_FLOODS_STATES || '1 hour',
  CACHE_GROUP_FLOODS: process.env.CACHE_GROUP_FLOODS || '1 hour',
  CACHE_GROUP_FLOODS_STATES: process.env.CACHE_GROUP_FLOODS_STATES || '/floods/states',
=======
  CACHE_DURATION_CARDS: process.env.CACHE_DURATION_CARDS || '1 minute',
  CACHE_DURATION_FLOODS: process.env.CACHE_DURATION_FLOODS || '1 hour',
  CACHE_DURATION_FLOODS_STATES: process.env.CACHE_DURATION_FLOODS_STATES || '1 hour',
  CACHE_DURATION_INFRASTRUCTURE: process.env.CACHE_DURATION_INFRASTRUCTURE || '1 hour',
>>>>>>> master
  COMPRESS: process.env.COMPRESS === 'true' || false,
  CORS: process.env.CORS === 'true' || false,
  CORS_HEADERS: process.env.CORS_HEADERS || ['Link'],
  DB_HOSTNAME: process.env.DB_HOSTNAME || '127.0.0.1',
  DB_NAME: process.env.DB_NAME || 'cognicity',
  DB_PASSWORD: process.env.DB_PASSWORD || 'p@ssw0rd',
  DB_PORT: process.env.DB_PORT || 5432,
  DB_SSL: process.env.DB_SSL === 'true' || false,
  DB_TIMEOUT: process.env.DB_TIMEOUT || 10000,
  DB_USERNAME: process.env.DB_USERNAME || 'postgres',
  FORMAT_DEFAULT: process.env.FORMAT_DEFAULT || 'json',
  FORMATS: (process.env.FORMATS || 'json').split(','),
  GEO_FORMAT_DEFAULT: process.env.GEO_FORMAT_DEFAULT || 'topojson',
  GEO_FORMATS: (process.env.GEO_FORMATS || 'geojson,topojson').split(','),
  GEO_PRECISION: process.env.GEO_PRECISION || 10,
  INFRASTRUCTURE_TYPES: (process.env.INFRASTRUCTURE_TYPES || 'floodgates,pumps,waterways').split(','),
  LANGUAGES: (process.env.LANGUAGES || 'en,id').split(','),
  LOG_CONSOLE: process.env.LOG_CONSOLE === 'true' || false,
  LOG_DIR: process.env.LOG_DIR || '',
  LOG_JSON: process.env.LOG_JSON === 'true' || false,
  LOG_LEVEL: process.env.LOG_LEVEL || 'error',
  LOG_MAX_FILE_SIZE: process.env.LOG_MAX_FILE_SIZE || 1024 * 1024 * 100,
  LOG_MAX_FILES: process.env.LOG_MAX_FILES || 10,
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 8001,
  REGION_CODES: (process.env.REGION_CODES || 'jbd,bdg,sby').split(','),
  RESPONSE_TIME: process.env.RESPONSE_TIME === 'true' || false,
  SECURE_AUTH0: process.env.SECURE_AUTH0 === 'true' || false,
  TABLE_FLOODGAUGE_REPORTS: process.env.TABLE_FLOODGAUGE_REPORTS || 'floodgauge.reports',
  TABLE_FEEDS_QLUE: process.env.TABLE_FEEDS_QLUE || 'qlue.reports',
  TABLE_GRASP_CARDS: process.env.TABLE_GRASP_CARDS || 'grasp.cards',
  TABLE_GRASP_LOG: process.env.TABLE_GRASP_LOG || 'grasp.log',
  TABLE_GRASP_REPORTS: process.env.TABLE_GRASP_REPORTS || 'grasp.reports',
  TABLE_INSTANCE_REGIONS: process.env.TABLE_INSTANCE_REGIONS || 'cognicity.instance_regions',
  TABLE_LOCAL_AREAS: process.env.TABLE_LOCAL_AREAS || 'cognicity.local_areas',
  TABLE_REM_STATUS: process.env.TABLE_REM_STATUS || 'cognicity.rem_status',
  TABLE_REM_STATUS_LOG: process.env.TABLE_REM_STATUS_LOG || 'cognicity.rem_status_log',
  TABLE_REPORTS: process.env.TABLE_REPORTS || 'cognicity.all_reports',
}
