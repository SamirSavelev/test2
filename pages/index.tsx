import type { NextPage } from "next";
import { withLayout } from "../layout/Layout";
import { useGetDataQuery } from "../src/features/table/table-api-slice";

const Home: NextPage = () => {
  const {
    data,
    error,
    isFetching,
    isUninitialized,
    isError,
    isLoading,
    isSuccess,
  } = useGetDataQuery();
  return <></>;
};

export default withLayout(Home);
