import "./styles.scss";
import { Box } from "@chakra-ui/react";

export function Tubaroes({ data }) {
  //console.log(data)
  return (
    <div style={{marginTop: '20px', marginBottom: 'none', padding: '0px'}}>
      <h1 className="container--tickers__title"> Shark Pool </h1>
      <div className="shark-container">
        {data.map((item, idx) => (
          <div key={idx} className="container-item">
            <Box
              w={"full"}
              bg={"gray.400"}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <h1 className="container-item_title">
                {item[0].ownername.replace(",", "").replace(".", "")}
              </h1>
              {item.map((subItem) => (
                <h2 className="container-item_subitem" key={subItem.code}>
                  {subItem.code}
                </h2>
              ))}
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
}
