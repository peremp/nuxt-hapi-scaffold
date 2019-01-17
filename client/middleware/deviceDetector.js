import uaParserJs from 'ua-parser-js';

const DEVICE_TYPE_MAPPINGS = {
  mobile: 'mobile',
  tablet: 'mobile',
  desktop: 'desktop'
};

const PLATFORM_BY_OS = {
  Windows: 'desktop',
  'Mac OS': 'desktop',
  Android: 'mobile',
  iOS: 'mobile',
  'Windows Phone': 'mobile',
  BlackBerry: 'mobile'
};

export default function (context) {
  if (context.store.state.deviceType) return;

  const userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent;
  const userAgentParsed = uaParserJs(userAgent);

  const detectedDeviceType = userAgent
    && (userAgentParsed.device.type || PLATFORM_BY_OS[userAgentParsed.os.name] || 'desktop');
  const deviceType = DEVICE_TYPE_MAPPINGS[detectedDeviceType] || this.defaultDeviceType;

  context.store.commit('SET_DEVICE_TYPE', deviceType);
}
