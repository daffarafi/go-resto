const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the Restaurant that has been added', async () => {
    await favoriteRestaurant.PutRestaurant({ id: 1 });
    await favoriteRestaurant.PutRestaurant({ id: 2 });

    expect(await favoriteRestaurant.GetRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.GetRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.GetRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a Restaurant from being added if it does not have the correct property', async () => {
    try {
      await favoriteRestaurant.PutRestaurant({ id: 1, aProperty: 'property' });
    } catch (err) {
      expect(err).toEqual("This restaurant doesn't have id!");
    }
  });

  it('can return all of the Restaurants that have been added', async () => {
    await favoriteRestaurant.PutRestaurant({ id: 1 });
    await favoriteRestaurant.PutRestaurant({ id: 2 });

    expect(await favoriteRestaurant.GetAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
    ]);
  });

  it('should remove favorite Restaurant', async () => {
    await favoriteRestaurant.PutRestaurant({ id: 1 });
    await favoriteRestaurant.PutRestaurant({ id: 2 });
    await favoriteRestaurant.PutRestaurant({ id: 3 });

    await favoriteRestaurant.DeleteRestaurant(1);

    expect(await favoriteRestaurant.GetAllRestaurant()).toEqual([
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should handle request to remove a Restaurant even though the Restaurant has not been added', async () => {
    await favoriteRestaurant.PutRestaurant({ id: 1 });
    await favoriteRestaurant.PutRestaurant({ id: 2 });
    await favoriteRestaurant.PutRestaurant({ id: 3 });

    try {
      await favoriteRestaurant.DeleteRestaurant(4);
    } catch (err) {
      expect(err).toEqual('This restauant is not in favorite!');
    }

    expect(await favoriteRestaurant.GetAllRestaurant()).toEqual([
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ]);
  });

  it('should be able to search for Restaurant', async () => {
    await favoriteRestaurant.PutRestaurant({ id: 1, name: 'film a' });
    await favoriteRestaurant.PutRestaurant({ id: 2, name: 'film b' });
    await favoriteRestaurant.PutRestaurant({ id: 3, name: 'film abc' });
    await favoriteRestaurant.PutRestaurant({
      id: 4,
      name: 'ini mah film abcd',
    });
    expect(await favoriteRestaurant.SearchRestaurant('film a')).toEqual([
      { id: 1, name: 'film a' },
      { id: 3, name: 'film abc' },
      { id: 4, name: 'ini mah film abcd' },
    ]);
  });
};

// eslint-disable-next-line
export { itActsAsFavoriteRestaurantModel };
