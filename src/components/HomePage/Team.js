import "../../style/HomePage/team.scss";

import Profile1 from "../../assest/team/profile1.jpg";
import Profile2 from "../../assest/team/profile2.jpg";
import Profile3 from "../../assest/team/profile3.jpg";
import Profile4 from "../../assest/team/profile4.jpg";
import Profile5 from "../../assest/team/profile5.jpg";
import Profile6 from "../../assest/team/profile6.jpg";

const TeamData = [
    {
        name: "Margery Rowanne",
        title: "MANAGER",
        img: Profile2,
    },
    {
        name: "Dream Adrian",
        title: "DEVELOPER",
        img: Profile1,
    },
    {
        name: "July Brynne",
        title: "FOUNDER",
        img: Profile3,
    },
    {
        name: "Paislee Kiki",
        title: "Designer",
        img: Profile4,
    },
    {
        name: "Scott Julius",
        title: "DEVELOPER",
        img: Profile5,
    },
    {
        name: "Linda Swint",
        title: "data scientist",
        img: Profile6,
    },
    
]

const Team = () => {
    return(
        <div className="team">
            <div className="team-container">
                <div className="team-header">
                        <h2>Arasaka Ekibi</h2>
                    </div>
                <div className="row-container">
                    {TeamData.map((item) => (
                        <div className="team-col">
                            <div className="team-card">
                                <figure className="team-profile">
                                    <img src={item.img} alt=""/>
                                </figure>
                                <h3>{item.name}</h3>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team;