export function getWindowSearchWithoutSign() {
  const urlSearch = window.location.search;
  const signPlace = urlSearch.indexOf('&sign');

  return urlSearch.slice(0,signPlace)
}


export function getAllStartParams() {
  const urlSearch = getWindowSearchWithoutSign();
  const searchString = urlSearch.indexOf('?') === 0 ? urlSearch.slice(1) : urlSearch;

  const params = searchString.split('&');
  const startParams = {};

  for (let param of params) {
    const [key, value] = param.split('='),
      formattedKey = key
        .replace('vk_', '')
        .split('_')
        .map((word, index) => index > 0 ? word[0].toUpperCase() + word.slice(1) : word).join('');

    startParams[formattedKey] = value
  }

  return startParams
}

export function getStoryDataFromRef(ref) {
  if (!ref || ref.indexOf('story') === -1) return null;

  const [owner_id, story_id, access_key, sticker_id, app_context] = ref.replace('story', '').split('_');

  return owner_id ?
    {owner_id: +owner_id, story_id: +story_id, access_key: access_key, sticker_id: +sticker_id, app_context: app_context} :
    null
}