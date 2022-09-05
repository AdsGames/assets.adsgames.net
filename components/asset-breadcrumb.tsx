import Link from "next/link";

import styles from "./asset-breadcrumb.module.css";

export const AssetBreadcrumb: React.FC<{ path: string; title: string }> = ({
  path,
  title,
}) => {
  const parts = path.split("/").filter(Boolean);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.breadcrumb}>
        <Link href="/">
          <a>home</a>
        </Link>
        {parts.map((part, index) => {
          const link = parts.slice(0, index + 1).join("/");
          return (
            <Link href={link} key={link}>
              <a>{part}</a>
            </Link>
          );
        })}
      </div>
    </>
  );
};
