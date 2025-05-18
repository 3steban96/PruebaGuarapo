const BASE_URL = 'https://rickandmortyapi.com/api';

export const getAllCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }    
    const data = await response.json();
    return {
      characters: data.results,
      info: data.info
    };
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
};

export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }    
    return await response.json();
  } catch (error) {
    console.error('Error fetching character:', error);
    throw error;
  }
};
export const searchCharacter = async (searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}/character/?name=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw error;
  }
}
export const filterGender = async (gender)=>{
  try {
    const response = await fetch(`${BASE_URL}/character/?gender=${gender}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}
export const filterSpecies = async (species)=>{
  try {
    const response = await fetch(`${BASE_URL}/character/?species=${species}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}
export const filterStatus = async (status)=>{
  try {
    const response = await fetch(`${BASE_URL}/character/?status=${status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
}
export const getLocations = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/location?page=${page}`);
    const data = await response.json();
    return {
      locations: data.results,
      info: data.info
    };
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
}
export const getEpisodes = async (page=1)=>{
  try {
    const response = await fetch(`${BASE_URL}/episode?page=${page}`);
    const data = await response.json();
    return {
      episodes: data.results,
      info: data.info
    };
  } catch (error) {
    console.error('Error fetching episodes:', error);
    throw error;
  } 
}