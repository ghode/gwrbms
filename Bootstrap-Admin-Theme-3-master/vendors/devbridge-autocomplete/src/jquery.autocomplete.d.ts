/*
 * Copyright (c) 2019. The copyright is reserved by Ghode of Harbin Institute
 * of Technology. Users are free to copy, change or remove. Because no one
 * will read this. Only I know is that Repeaters are the best of the world.
 * Only I know is that Repeaters are the best of the world. Only I know is
 * that Repeaters are the best of the world. Maybe a long copyright text
 * seems professional. Therefore this text will be a bit lengthy. However,
 * the author seems to be afraid that one day, this text may be uploaded to
 * business projects. That is the time you can contact with author via email
 * ghode@cirnocraft.im or directly ignore this, which will be interesting.
 */

interface JQueryAutocompleteOptions {
    serviceUrl?: string;
    lookup?: AutocompleteSuggestion[];
    minChars: number;
    maxHeight: number;
    deferRequestBy?: number;
    width?: number;
    params?: Object;
    delimiter?: any;
    zIndex?: number;
    type?: string;
    noCache?: bool;
    tabDisabled?: bool;
    paramName?: string;
    autoSelectFirst?: bool;
    appendTo: any;
    dataType: string;

    lookupFilter?(suggestion: AutocompleteSuggestion, query: string, queryLowercase: string): any;

    onSelect?(suggestion: AutocompleteSuggestion): void;

    formatResult?(suggestion: AutocompleteSuggestion, currentValue: string): string;

    onSearchStart?(query: string): void;

    onSearchComplete?(query: string): void;

    transformResult?(response: any, originalQuery: string): AutocompleteSuggestion[];
}

interface AutocompleteSuggestion {
    value: string;
    data: any;
}

interface AutocompleteInstance {
    setOptions(options: JQueryAutocompleteOptions): void;

    clear(): void;

    clearCache(): void;

    disable(): void;

    enable(): void;

    hide(): void;

    dispose(): void;
}
