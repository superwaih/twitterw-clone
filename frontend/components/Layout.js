import Header from "./home-components/Header";
import MobileNav from "./home-components/MobileNav";
import NewTweet from "./home-components/NewTweet";
import SearchBar from "./home-components/SearchBar";
import { Sidebar } from "./home-components/Sidebar";
import TrendsTable from "./home-components/TrendsTable";
import TweetPost from "./TweetPost";

const Layout = ({children}) => {
    return (
    <div className='flex relative h-screen mx-auto max-w-7xl w-full md:w-11/12' >
        {/* Sidebar */}
        <Sidebar/>
        {/* Mobile Nav */}
        <MobileNav />

        <div className='w-full relative border-slate-700 sm:border-l sm:border-r overflow-y-auto scrollbar-hide' >
          
            <Header />
           {children}
           
            
        </div>
        {/* Search */}
        <div className='w-3/5 hidden md:block'  >
        <SearchBar />
        {/* Searchbar */}
        <TrendsTable />
        {/* Trends */}

        </div>
       
    </div>
    );
}
 
export default Layout;