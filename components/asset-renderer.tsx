/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import type { AssetStructure } from "@/constants/assets";
import { formatName } from "@/lib/format-name";

import styles from "./asset-renderer.module.css";

const BASE_BUCKET = "https://assets-ads-games.us-east-1.linodeobjects.com";

export const AssetRenderer: React.FC<{ assets: AssetStructure }> = ({
  assets,
}) => (
  <div className={styles["asset-renderer"]}>
    {assets.children?.map((asset) => {
      const name = formatName(asset.name);

      if (asset.path.endsWith(".png")) {
        return (
          <Link href={`${BASE_BUCKET}/${asset.path}`} key={asset.path}>
            <a
              className={styles["asset-renderer--image"]}
              rel="nofollow"
              target="_blank"
            >
              <img
                alt={name}
                key={asset.path}
                src={`${BASE_BUCKET}/${asset.path}`}
              />
            </a>
          </Link>
        );
      }

      if (asset.path.endsWith(".mp3")) {
        return (
          <div className={styles["asset-renderer--audio"]} key={asset.path}>
            <Link href={`${BASE_BUCKET}/${asset.path}`} key={asset.path}>
              <a rel="nofollow" target="_blank">
                {name}
              </a>
            </Link>
            <br />
            <audio controls>
              <source src={`${BASE_BUCKET}/${asset.path}`} />
              <track default kind="captions" srcLang="en" />
            </audio>
          </div>
        );
      }

      return (
        <div className={styles["asset-renderer--link"]} key={asset.path}>
          <Link href={`/assets/${asset.path}`}>{name}</Link>
        </div>
      );
    })}
  </div>
);
