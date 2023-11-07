import {range} from "@/utils";
import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton";
import React from "react";

function Loading() {
    return (<section className="max-width-wrapper">
            <header className="library-header">
                <h1>My games
                </h1>
            </header>
            <div className="game-grid">
                {range(0, 12).map(() => <LibraryGameCardSkeleton/>)}
            </div>
        </section>)
}

export default Loading;