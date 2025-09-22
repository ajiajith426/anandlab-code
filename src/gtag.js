export const gtagReportConversion = (url, eventId) => {
  const callback = () => {
    if (typeof (url) !== 'undefined') {
      window.location = url;
    }
  };
  window.gtag('event', 'conversion', {
    'send_to': eventId,
    'event_callback': callback
  });

  return false;
};
