import type { GetStaticProps } from "next";
import Image from "next/image";

import { AssetRenderer } from "@/components/asset-renderer";
import { Layout } from "@/components/layout";
import type { AssetStructure } from "@/constants/assets";
import { getAssetData } from "@/lib/asset-data";
import sample2 from "@/public/images/sample2.png";
import sample3 from "@/public/images/sample3.png";
import utilStyles from "@/styles/utils.module.css";

interface HomeProps {
  assets: AssetStructure;
}

const Home: React.FC<HomeProps> = ({ assets }) => (
  <Layout description="Assets on A.D.S. Games" home title="Home">
    <section className={utilStyles.headingMd}>
      <h2 className={utilStyles.headingLg}>
        Welcome to the ADS Games CC0 assets page.
      </h2>
      <p>
        All the images, sound effects, and images from the games we created.
        <br />
        All the content was made by Danny Van Stemp and Allan Legemaate, feel
        free to use it however you want.
        <br />
        If you do use this or sell this, we would really appreciate it if you
        mentioned us in the credits.
        <br />
        We hope you find this useful, and happy game developing!
        <br />
        Got any questions or comments? Shoot us an email at{" "}
        <a href="mailto:contact@adsgames.net">contact@adsgames.net</a>
      </p>
    </section>

    <h2>Asset Links</h2>

    <AssetRenderer assets={assets} />

    <h2>Other Assets</h2>
    <a href="https://freesound.org/people/alegemaate/">
      A link Allan Legemaate&apos;s freesound account
    </a>
    <br />
    <a href="https://freesound.org/people/danwardvs/">
      A link Danny Van Stemp&apos;s freesound account
    </a>
    <br />
    <a href="https://soundcloud.com/allan-legemaate">
      Some music on Allan&apos;s soundcloud page is CC0!
    </a>

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Updates</h2>
      <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
          <h4>August 27, 2014: Mini Jim assets are up!</h4>
          <p>New 64x64 tiles and characters are here!</p>
          <Image alt="sample of new images" src={sample3} />
          <hr />
        </li>

        <li className={utilStyles.listItem}>
          <h4>July 10,2014: New assets are up!</h4>
          <p>
            100+ tiles, a dozen new sound effects, and a new game assets added,
            plus a bunch more images!
          </p>
          <Image alt="sample of new images" src={sample2} />
          <hr />
        </li>
      </ul>
    </section>

    <br />
  </Layout>
);

export const getStaticProps: GetStaticProps<HomeProps> = () => {
  const assets = getAssetData([""]);

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

export default Home;
