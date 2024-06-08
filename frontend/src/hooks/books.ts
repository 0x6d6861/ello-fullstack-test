import { useQuery, gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const useGetBooks = () => {

      const { loading, error, data } = useQuery(GET_BOOKS);

      return { loading, error, data }

}