import { useRouter } from "next/router";
import { useEffect } from "react";

const InsightsD = () => {
  const router = useRouter();
  const { insightsD } = router.query;

  useEffect(() => {
    console.log("Router Query:", router.query);
  }, [router.query]);

  return (
    <h1>This is the {insightsD} page</h1>
  );
};

export default InsightsD;
