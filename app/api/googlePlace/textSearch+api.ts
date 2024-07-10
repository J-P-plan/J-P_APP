export async function GET(request: Request) {
  const contents = new URL(request.url).searchParams.get("contents");

  if (!contents) {
    return Response.json(null);
  }

  const response = await fetch(
    `${process.env.BACKEND_ENDPOINT}/googleplace/text-search/page?contents=${contents}`
  );

  if (response.ok) {
    const res = await response.json();

    return Response.json(res);
  }

  return Response.json(data);
}

const data = {
  nextPageToken: null,
  results: [
    {
      placeId: "ChIJRUDITFTjDDURMb8emNI2vGY",
      name: "제주특별자치도",
      formattedAddress: "대한민국 제주특별자치도",
      geometry: {
        location: {
          lat: 33.3846216,
          lng: 126.5534925,
        },
      },
      rating: 0,
      userRatingsTotal: 0,
      photoUrls: [
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=720&maxheight=960&photo_reference=AUc7tXUIW1K9L2IGE0eLuQgXjgNg3kqIanZN2hTRg2J_XWif02TlCux9P9NkKxcefeOzdCIvysCB194-xJXIgewME8uZTVnfvmL9WHTmuIwZFjjCk9XKuM8vtig0uaUCUoJ8klM599_qB4qK2yNXYO-rfmj5qnXT1ISroZz4RzVLOE4mzr0O&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=930&maxheight=617&photo_reference=AUc7tXWisfS9RuBkiwMbqDGm_sWxemiYt8qb01eDGEGYcIWc86pVYbt8m8u6JS3RLxGspFi1hNlm43Zt6ltsLhkn9FWUuDeWFBirhcNoUM7NQvt4eQr1uuQGDATEcveJbI5fszDPXIXW2PyFvmU152AvC5i4nZdYh1H0X7T948IG-6UAqhom&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4160&maxheight=2340&photo_reference=AUc7tXX_r6KvTP034fJ4-LnLxqscggM_3a-zpeP4JxxViEsDHGOiJxv44ol4qgEQ3OJYKDy3fesZG80-966boa-upHjihGiSnEagSi5CciCKgIhdRuC0_ff1vBqq51e4QlXlrtA4PyyN0DSjEaTZExcDYUSLm4oORMImTnHlDsqzo_d2L9-K&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=5312&maxheight=2988&photo_reference=AUc7tXWBO708WyN0E1j0oFA3TfBNii1mSe0gyIaNKKXXV3GxFfCa7GOCbKQK_f31MCGnPXx7iNkZXlo-sgEBfcnLV23Rl4DJDbNE8UuGssckAvc5HYJHdzU-_mEwuDbW1o2ZHVnm9S5D3fokYmHMcYflR3ibD7dSOnKaQ_U6WAduRquk0GSO&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4032&maxheight=1816&photo_reference=AUc7tXWJ5t0Go36t10x5wNuTZZ2OaDwHE7QTNBjXa8_P9ns-Se43Me-APIh01slf-N7LK6K35D0oFdsa-VpiBZnX4nSdsr_vJMO61QPIqS3wI5b9reNzS-KkUKXQ5rCIV71XmcAGABTn2twWXVfZwqJqlSXJyZYG_Z0YrFviTyZrrI5BXQy0&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&maxheight=4032&photo_reference=AUc7tXW82cOsul7-jopcIcL6Vn8diE96x6BapsorH-I5gKYGkeLEPaZ7QniBb65EV7WRfYLDM9fNkUHJf4AhykcwSJtwoVbHjYDb7Z1Atx2GhzUZP4bE2bh-vFuHPuaM0lyBEOmqZKHUIuPOHpnTHsMSSYEhlsPr3C0Vqph6ACPhQgW4698&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=1504&maxheight=1000&photo_reference=AUc7tXXkCRxlJtHIt6EiO_1tODCIVGihlUKyhG1B_ri89DiwZQBDf6RIW_TwqHYLf9-QoLHQe3BJmdlBqnkk3esFInC_Z6156QYBR5By4CW0NDGu3Mr165KIthsy5b6KqsxQNiW6z_RB-jT6MnDX8uPqrPpVttqTeWjXG53fqwzClAHDSY9j&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=3024&maxheight=4032&photo_reference=AUc7tXXhWsFLR0B1cddUJ3SIPUVvxxRtCOBUXZ0sNW86dh92i79TDxpQgVnJykbiPDdlJVj8ZFg6A8Lq6HPiHlyuvjm8Gl6I5_a_SHf5ZOWRYNiHDR0H0BSg_u82pCkdpnamX2DU1H9_NkHwwn9WP8PI-VbEUdRfgmnmZmcfA5h2Sw_A5ybc&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4000&maxheight=3000&photo_reference=AUc7tXX87aoRWdH_q9mD9c1N9BSGM6APva0gQV3eWS1P_dowqKYVu3YhmxY79B40hWBRJDivbjR_gXguftAOlqx9QPohWUIc4pcgZypdhxPCkGEIBTpfX9VtNL2elgnsXH_YK3M_EHOkwHtBwlHc5-3THq1FWSWwrSHKQopxWSG_bp8-cbRe&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
        "https://maps.googleapis.com/maps/api/place/photo?maxwidth=4128&maxheight=2322&photo_reference=AUc7tXXLvjNvAStRqRqzPHQlnqI8PFOpP12IGWKz1Bm5bgRfc3FXRQtWvck8T8pheF7EcLqz9vXAPiSC6doJQ5NpcmvnryLeCc7MrPJq1AqSuqlH6yfHH655WJWSoUZLwaXAFaC5gct_pEFPQtNIcNaR5aBn7yGrHHnPRnnhoXVkcSVdJJ_C&key=AIzaSyCTeOA4gqhKBT_ID23OABN_zndStqAx3f0",
      ],
    },
  ],
};
