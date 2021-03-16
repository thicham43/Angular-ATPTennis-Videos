/*
 *  Official youtube API v3 models from:
 *  https://github.com/googleapis/google-api-nodejs-client/blob/master/src/apis/youtube/v3.ts
*/

export interface SearchListResponse {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#searchListResponse&quot;&lt;/code&gt;.
     */
     kind?: string | null;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The token that can be used as the value of the &lt;code&gt;pageToken&lt;/code&gt; parameter to retrieve the next page in the result set.
     */
     nextPageToken?: string | null;
     regionCode?: string | null;
    /**
     * General pagination information.
     */
     pageInfo?: PageInfo;
    /**
     * Pagination information for token pagination.
     */
     items?: SearchResult[];
  }

  export interface SearchResult {
    /**
     * Identifies what kind of resource this is. Value: the fixed string &lt;code&gt;&quot;youtube#searchResult&quot;&lt;/code&gt;.
     */
     kind?: string | null;
    /**
     * Etag of this resource.
     */
    etag?: string | null;
    /**
     * The &lt;code&gt;id&lt;/code&gt; object contains information that can be used to uniquely identify the resource that matches the search request.
     */
    id?: ResourceId;
    /**
     * The &lt;code&gt;snippet&lt;/code&gt; object contains basic details about a search result, such as its title or description. For example, if the search result is a video, then the title will be the video&#39;s title and the description will be the video&#39;s description.
     */
    snippet?: SearchResultSnippet;
  }

  export interface PageInfo {
    /**
     * The number of results included in the API response.
     */
    resultsPerPage?: number | null;
    /**
     * The total number of results in the result set.
     */
    totalResults?: number | null;
  }


  export interface ResourceId {
    /**
     * The type of the API resource.
     */
    kind?: string | null;
    /**
     * The ID that YouTube uses to uniquely identify the referred resource, if that resource is a video. This property is only present if the &lt;code&gt;resourceId.kind&lt;/code&gt; value is &lt;code&gt;youtube#video&lt;/code&gt;.
     */
    videoId?: string | null;
  }

  export interface SearchResultSnippet {
    /**
     * The value that YouTube uses to uniquely identify the channel that published the resource that the search result identifies.
     */
    channelId?: string | null;
    /**
     * The title of the channel that published the resource that the search result identifies.
     */
    channelTitle?: string | null;
    /**
     * A description of the search result.
     */
    description?: string | null;
    /**
     * It indicates if the resource (video or channel) has upcoming/active live broadcast content. Or it&#39;s &quot;none&quot; if there is not any upcoming/active live broadcasts.
     */
    liveBroadcastContent?: string | null;
    /**
     * The creation date and time of the resource that the search result identifies. The value is specified in &lt;a href=&quot;//www.w3.org/TR/NOTE-datetime&quot;&gt;ISO 8601&lt;/a&gt; format.
     */
    publishedAt?: string | null;
    publishTime?: string | null;
    /**
     * A map of thumbnail images associated with the search result. For each object in the map, the key is the name of the thumbnail image, and the value is an object that contains other information about the thumbnail.
     */
    thumbnails?: ThumbnailDetails;
    /**
     * The title of the search result.
     */
    title?: string | null;
  }

  export interface ThumbnailDetails {
    /**
     * The default image for this resource.
     */
    default?: Thumbnail;
    /**
     * The high quality image for this resource.
     */
    high?: Thumbnail;
    /**
     * The maximum resolution quality image for this resource.
     */
    maxres?: Thumbnail;
    /**
     * The medium quality image for this resource.
     */
    medium?: Thumbnail;
    /**
     * The standard quality image for this resource.
     */
    standard?: Thumbnail;
  }

  export interface Thumbnail {
    /**
     * The thumbnail image&#39;s URL.
     */
     url?: string | null;
    /**
     * (Optional) Height of the thumbnail image.
     */
    height?: number | null;
    /**
     * (Optional) Width of the thumbnail image.
     */
    width?: number | null;
  }