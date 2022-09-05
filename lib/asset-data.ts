import type { AssetStructure } from "@/constants/assets";
import { ASSET_FOLDERS } from "@/constants/assets";

/**
 * Find the asset folder for a given asset structure.
 * @param id Split id of the asset category
 * @param current Current asset category collection
 * @returns Asset category collection if found, otherwise null
 */
const findAssetFolder = (
  id: string[],
  current: AssetStructure[],
): AssetStructure | null => {
  const [first, ...rest] = id;

  const next = current.find((child) => child.name === first);

  if (!next) {
    return null;
  }

  if (next.name === first && rest.length === 0) {
    return next;
  }

  if (!next.children) {
    return null;
  }

  return findAssetFolder(rest, next.children);
};

/**
 * Get page data
 * @param directoryId current directory category to get assets from
 * @returns All asset data for a category
 */
export const getAssetData = (directoryId: string[]): AssetStructure | null => {
  return findAssetFolder(directoryId, [ASSET_FOLDERS]);
};

/**
 * Get page data for all paths
 * @returns All asset data
 */
export const getAllPaths = () => {
  const resolvePaths = (current: AssetStructure[]): string[] =>
    current.flatMap((child) => {
      if (child.children) {
        return [child.path, ...resolvePaths(child.children)];
      }

      return [];
    });

  return resolvePaths([ASSET_FOLDERS]).filter(Boolean);
};
