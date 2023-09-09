import { Character, PaginatedCharacter } from "./../types/marvel.type";
import { HttpClient } from "../apis/httpClient";

export class MarvelService {
  constructor(private httpClient: HttpClient) {
    this.httpClient;
  }

  getCharacterList = async () => {
    const response = await this.httpClient.get(
      "/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
    );

    return (await response.json()).data as PaginatedCharacter;
  };

  getCharacterDetail = async (id: string) => {
    const response = await this.httpClient.get(`/v1/public/characters/${id}`);

    const { results } = (await response.json()).data as PaginatedCharacter;
    return results[0] as Character;
  };
}
