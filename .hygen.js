module.exports = {
  helpers: {
      getComponentDirectory: (componentType) => {
        switch (componentType) {
          case 'molecule':
          case 'm':
            return 'molecules';
  
          case 'organism':
          case 'o':
            return 'organisms';
  
          case 'atom':
          case 'a':
          default:
            return 'atoms';
        }  
      },
  }
};