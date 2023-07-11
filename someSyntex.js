//for makeing the JSON object using array key value paris data
this.store.satelliteArr = satellite.map((d) => ({
      noradCatId: d.noradCatId,
      name: d.name,
    }));
