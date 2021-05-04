import useSWR from "swr";

import fetcher from "lib/fetcher";

export default function useCurrentUser() {
  const token = sessionStorage.getItem("token");
  if (token) {
    const { data, mutate } = useSWR("/user/", fetcher, {
      errorRetryCount: 2,
      revalidateOnFocus: false,
    });
    const currentUser = data ? data : null;
    return [currentUser, { mutate }];
  } else {
    return ["noToken"];
  }
}
