import Entry from "./componenets/Entry";
import Contacts from "./componenets/Contacts";
import Navbar from "./componenets/Navbar";


function App() {
    return (
        <div>
            <Navbar />

            <Entry 
                img="https://scrimba.com/links/travel-journal-japan-image-url"
                name="Mount Fuji"
                country="Japan"
                dates="12 Jan, 2021 - 24 Jan, 2021"
                description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters."
                googleMapsUrl="https://www.google.com/maps/place/Mount+Fuji/"
            />

            <Entry 
                img="https://scrimba.com/links/travel-journal-australia-image-url"
                name="Sydney Opera House"
                country="Australia"
                dates="27 May, 2021 - 8 Jun, 2021"
                description="The Sydney Opera House is a multi-venue performing arts centre."
                googleMapsUrl="https://www.google.com/maps/place/Sydney+Opera+House/"
            />

            <Entry 
                img="https://scrimba.com/links/travel-journal-norway-image-url"
                name="Geirangerfjord"
                country="Norway"
                dates="01 Oct, 2021 - 18 Nov, 2021"
                description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway."
                googleMapsUrl="https://www.google.com/maps/place/Geirangerfjord/"
            />
        </div>
    );
}

export default App;
