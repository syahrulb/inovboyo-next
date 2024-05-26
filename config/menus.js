import { DashBoard, Application } from "@/components/svg";

export const menusConfig = {
  mainNav: [
    {
      isHeader: true,
      title: "Halaman utama",
      icon: DashBoard,
      href: "/",
    },
    {
      isHeader: true,
      title: "Rumah Inovasi",
      icon: Application,
      href: "/",
    },
    {
      isHeader: true,
      title: "Daftar riset inovasi",
      icon: Application,
      href: "/",
    },
  ],
  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/",
      },
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/",
      },
    ],
  },
};
