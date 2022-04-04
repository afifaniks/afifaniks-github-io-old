import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

function CompanyProject(props) {
    const { projects } = props;
    const [open, setOpen] = useState(false);
    return (
        <div>
            {
                projects
                && <><Button className="mt-2" onClick={() => setOpen(!open)} aria-controls="collapse-detail" aria-expanded={open}>Affiliated Projects</Button>
                    <Collapse in={open}>
                        <div id="collapse-detail">
                            {
                                projects.map((project) => <>
                                    <p>{project.name}</p>
                                </>)
                            }
                        </div>
                    </Collapse>
                </>
            }
        </div>
    );
}

export default CompanyProject;
