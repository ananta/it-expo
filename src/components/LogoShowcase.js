import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import "../style/list-portfolio.less";

const LogoShowCase = () => {
    const query = useStaticQuery(imageQuery);
    console.log(query);
    const { expoLogo, gcesLogo } = query;
    return (
        <div
            className="item col s12"
            style={{ marginBottom: 100, marginTop: 50 }}
        >
            <div
                className="flex"
                style={{
                    justifyContent: "space-between"
                }}
            >
                <div style={{ float: "left" }}>
                    <div
                        style={{
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <a href="http://gces.edu.np">
                            <Img
                                fixed={gcesLogo.childImageSharp.fixed}
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 130,
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            />
                        </a>
                    </div>
                </div>
                <div style={{ float: "right" }}>
                    <div>
                        <a href="http://itexpo.gces.edu.np">
                            <Img fixed={expoLogo.childImageSharp.fixed} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const imageQuery = graphql`
    {
        expoLogo: file(relativePath: { eq: "expoLogo.png" }) {
            childImageSharp {
                fixed(width: 130) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        gcesLogo: file(relativePath: { eq: "gcesLogo.png" }) {
            childImageSharp {
                fixed(width: 130) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export default LogoShowCase;
// export default function(props) {
//     console.log(props);
//     return (
//         <div className="row">
//             <LogoShowCase data={props.data} />
//         </div>
//     );
// }
