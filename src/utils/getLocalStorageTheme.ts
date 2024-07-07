const getLocalTheme = () => {
  const theme = localStorage.getItem("__Tasker_app_color_Theme__");

  return theme;
};

export default getLocalTheme;
