const imageModules = import.meta.glob('../assets/stamps/*.{jpg,png,jpeg,webp}', { 
  eager: true 
});

// Transform into a simpler map keyed by filename
export const stampImages =
  Object.fromEntries(
    Object.entries(imageModules).map(([path, module]) => {
    const filename = path.split('/').pop();
    return [filename, module.default];
  }))

