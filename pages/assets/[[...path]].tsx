import type { GetStaticPaths, GetStaticProps } from "next";

import { AssetBreadcrumb } from "@/components/asset-breadcrumb";
import { AssetRenderer } from "@/components/asset-renderer";
import { Layout } from "@/components/layout";
import type { AssetStructure } from "@/constants/assets";
import { getAllPaths, getAssetData } from "@/lib/asset-data";
import { formatName } from "@/lib/format-name";

interface AssetsProps {
  assets: AssetStructure;
}

const Assets: React.FC<AssetsProps> = ({ assets }) => (
  <Layout
    description={`View ${formatName(assets.name)} on assets.adsgames.net`}
    title={formatName(assets.name)}
  >
    <AssetBreadcrumb path={assets.path} title={formatName(assets.name)} />
    <AssetRenderer assets={assets} />
  </Layout>
);

export const getStaticProps: GetStaticProps<AssetsProps> = ({ params }) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  if (!params.path) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const assets = getAssetData(["", ...(params.path as string[])]);

  if (!assets) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      assets,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPaths().map((path) => `/assets/${path}/`);
  return {
    paths: paths,
    fallback: false,
  };
};

export default Assets;
