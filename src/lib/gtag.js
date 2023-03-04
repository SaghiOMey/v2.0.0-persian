export const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID;
 
export const pageview = () => {
  window.gtag("config", G-TDX5733Y0L, {
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