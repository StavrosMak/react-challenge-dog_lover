
import DisplayRandomImages from "../Components/DisplayRandomImages/DisplayRandomImages"
import Banner from "../Components/Banner/Banner"
export default function Home() {
    return (
        <div className="Home">
            <Banner />
            <DisplayRandomImages countImages={60} header={'Discover a World of Adorable Dogs'}  />
        </div>
    )
}