export type isScrolledProps = {
  isScrolled: boolean;
};

export type isPlayBtnProps = {
  isPlayBtn: boolean;
};
export type featuredProps = {
  type?: string;
};

export type ArrowProps = {
  isMoved: boolean;
};

export type ListProps = {
  handleClick(direction: string): void
};

export type ListItemProps = {
  indexValue: number;
};

// export type IsHoveredProps = {
//   indexValue: number;
// }