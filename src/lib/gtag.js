export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
 
export const pageview = () => {
  window.gtag("config", G-R1QT5QF2B2, {
    page_path: url,
  });
};
 
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};