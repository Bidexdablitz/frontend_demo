import * as React from "react";
import { useAnimateIn } from "utilities/customHooks";

type UploadProps = {
    files: FileList | undefined;
    progress: number;
    uploading: boolean;
    controller: any;
};

function UploadProgress(props: UploadProps) {
    if (!props.uploading) return null;
    return (
        <div className="uploading-control slide-in-rest">
            <div className="cancel" onClick={() => props.controller.current.abort()} />
            <p className="current-state">Uploading {props.files?.length} image(s)</p>
            <p className="current-percentage">{Math.floor(props.progress)}%</p>
            <div className="progress-bar">
                <div className="loader" style={{ transform: `translateX(-${100 - props.progress}%)` }} />
            </div>
        </div>
    );
}

export default UploadProgress;
