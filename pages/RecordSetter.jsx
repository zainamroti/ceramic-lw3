import { useViewerRecord } from "@self.id/react";
import { useEffect, useRef, useState } from "react"
import styles from '../styles/Home.module.css'

export default function RecordSetter() {
    const [name, setName] = useState("");

    const record = useViewerRecord("basicProfile");

    const updateRecordName = async (name) => {
        await record.merge({
            name: name,
        });
    };

    return (
        <div className={styles.content}>
            <div className={styles.mt2}>
                {record.content ? (
                    <div className={styles.flexCol}>
                        <span className={styles.subtitle}>
                            Hello {record.content.name}!
                        </span>

                        <span>
                            The above name was loaded from Ceramic Network. Try updating it
                            below.
                        </span>
                    </div>
                ) : (
                    <span>
                        You do not have a profile record attached to your 3ID. Create a
                        basic profile by setting a name below.
                    </span>
                )}
            </div>

            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.mt2}
            />
            <button onClick={() => updateRecordName(name)}>Update</button>
        </div>
    );


}
