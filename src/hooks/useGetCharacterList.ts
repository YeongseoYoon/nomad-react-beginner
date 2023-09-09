import { useEffect, useState } from "react";
import { MarvelService } from "../services/marvel.service";
import { Character } from "../types/marvel.type";

const useGetCharacterList = (service: MarvelService) => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterList, setCharacterList] = useState<Character[]>();

  useEffect(() => {
    (async () => {
      const { results } = await service.getCharacterList();
      setCharacterList(results);
      setIsLoading(false);
    })();
  }, []);

  return { isLoading, characterList };
};
export default useGetCharacterList;
