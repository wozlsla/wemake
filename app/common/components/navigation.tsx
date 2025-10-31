import { Link } from "react-router";
import { Separator } from "./ui/separator";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "./ui/navigation-menu";

const menus = [
  {
    name: "Produncts",
    to: "/products",
    items: [
      {
        name: "Leadboards",
        description: "See the top performers",
        to: "/products/leadboards",
      },
      {
        name: "Categories",
        description: "See the categories",
        to: "/products/categories",
      },
      {
        name: "Search",
        description: "Search for a product",
        to: "/products/search",
      },
      {
        name: "Submit a Product",
        description: "Submit a new product to the platform",
        to: "/products/submit",
      },
      {
        name: "Promote a Product",
        description: "Promote a product to the platform",
        to: "/products/promote",
      },
    ],
  },
  {
    name: "Jobs",
    to: "/jobs",
    items: [
      {
        name: "Remote Jobs",
        description: "See the remote jobs",
        to: "/jobs?location=remote",
      },
      {
        name: "Full-Time Jobs",
        description: "See the full-time jobs",
        to: "/jobs?type=full-time",
      },
      {
        name: "Freelance Jobs",
        description: "See the freelance jobs",
        to: "/jobs?type=freelance",
      },
      {
        name: "Internships",
        description: "See the internships",
        to: "/jobs?type=internship",
      },
      {
        name: "Submit a Job",
        description: "Submit a new job to the platform",
        to: "/jobs/submit",
      },
    ],
  },
  {
    name: "Community",
    to: "/community",
    items: [
      {
        name: "All Posts",
        description: "See all posts in our community",
        to: "/community",
      },
      {
        name: "Top Posts",
        description: "See the top posts in our community",
        to: "/community?sort=top",
      },
      {
        name: "New Posts",
        description: "See the new posts in our community",
        to: "/community?sort=new",
      },
      {
        name: "Create a Post",
        description: "Create a post in our community",
        to: "/community/create",
      },
    ],
  },
  {
    name: "IdeasGPT",
    to: "/ideas",
  },
  {
    name: "Teams",
    to: "/teams",
    items: [
      {
        name: "All Teams",
        description: "See all teams in our community",
        to: "/teams",
      },
      {
        name: "Create a Team",
        description: "Create a team in our community",
        to: "/teams/create",
      },
    ],
  },
];

export default function Navigation() {
  return (
    <nav className="flex px-20 h-16 items-center justify-between backdrop-blur fixed top-0 left-0 right-0 z-50 bg-background/50">
      <div className="flex items-center">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          wemake
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {menu.items?.map((item) => (
                    <NavigationMenuItem key={item.name}>
                      <Link to={item.to}>{item.name}</Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
