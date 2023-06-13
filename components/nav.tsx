import styles from "./nav.module.css";

const NAV_ITEMS = [
  {
    name: "Home",
    href: "https://www.adsgames.net",
    style: styles.menuHome,
  },
  {
    name: "Games",
    href: "https://www.adsgames.net/games",
    style: styles.menuGames,
  },
  {
    name: "Contact",
    href: "https://www.adsgames.net/contact",
    style: styles.menuContact,
  },
  {
    name: "Assets",
    href: "https://assets.adsgames.net",
    style: styles.menuAssets,
  },
  {
    name: "Learn",
    href: "https://www.adsgames.net/learn",
    style: styles.menuLearn,
  },
  {
    name: "Members",
    href: "https://www.adsgames.net/auth/login",
    style: styles.menuMembers,
  },
  {
    name: "Links",
    href: "https://www.adsgames.net/links",
    style: styles.menuLinks,
  },
  {
    name: "About",
    href: "https://www.adsgames.net/about",
    style: styles.menuAbout,
  },
];

export const Nav: React.FC = () => (
  <nav>
    <div className={styles.navContainer}>
      {NAV_ITEMS.map(({ name, href, style }) => (
        <a href={href} key={name} title={name}>
          <div className={`${style} ${styles.navIcon}`} title={name} />
          <p>{name}</p>
        </a>
      ))}
    </div>
  </nav>
);
