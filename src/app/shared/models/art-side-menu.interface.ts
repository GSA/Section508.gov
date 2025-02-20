export interface ArtSideMenuInterface {
    sideNavItems: {
        name: string | undefined;
        id: number;
    }[];
    activeId: number | null;
}
