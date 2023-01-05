import { createContext, useState } from "react";

export const CreateMembershipContext = createContext();

const initialState = {};

const MembershipDataProvider = ({ children }) => {
    const [membershipData, setMembershipData] = useState({
        ...initialState,
        perfilType: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMembershipData({ ...membershipData, [name]: value });
        console.log(membershipData)
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;

        const directObject = name.split('_')[0];
        const attribute = name.split('_')[1];

        setMembershipData({ ...membershipData, [directObject]: { ...membershipData[directObject], [attribute]: checked } });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        
        setMembershipData({ ...membershipData, images: file });
    };

    const handleChangeObject = (e) => {
        const { name, value } = e.target;

        const directObject = name.split('_')[0];
        const attribute = name.split('_')[1];

        setMembershipData({ ...membershipData, [directObject]: { ...membershipData[directObject], [attribute]: value } });

        console.log(membershipData)
    };

    const handlePerfilType = (e) => {
        const type = e.target.value;

        if (membershipData.perfilType.includes(type)) {
            setMembershipData({ ...membershipData, perfilType: membershipData.perfilType.filter(item => item !== type) });
        } else {
            setMembershipData({ ...membershipData, perfilType: [...membershipData.perfilType, type] });
        }

        console.log(membershipData)
    };

    const data = { 
        membershipData,
        handleChange,
        handleCheckboxChange,
        handleImageChange,
        handleChangeObject,
        handlePerfilType
    }

    return (
        <CreateMembershipContext.Provider value={data}>
            {children}
        </CreateMembershipContext.Provider>
    );
};

export {MembershipDataProvider}

export default CreateMembershipContext;