<template>
  <div class="error" v-if="error">{{ error }}</div>
  <div v-if="playlist" class="playlist-details">
    <!-- playlist information -->
    <div class="playlist-info">
      <div class="cover">
        <img :src="playlist.coverUrl" />
      </div>
      <h2>{{ playlist.title }}</h2>
      <p class="username">Created by {{ playlist.userName }}</p>
      <p class="description">{{ playlist.description }}</p>
      <button v-if="ownership" @click="handleDelete" class="delete">
        Delete Playlist
      </button>
    </div>

    <!-- song list -->
    <div class="song-list">
      <div v-if="!playlist.songs.length" class="noSongs">
        No songs has been added to this playlis yet
      </div>

      <div v-for="song in playlist.songs" :key="song.id" class="single-song">
        <div class="details">
          <h4>{{ song.title }}</h4>
          <p>{{ song.artist }}</p>
        </div>

        <button v-if="ownership" @click="handleClick(song.id)" class="delete">
          delate
        </button>
      </div>
      <AddSong v-if="ownership" :playlist="playlist" />
    </div>
  </div>
</template>

<script>
import useDocument from "@/composables/useDocument";
import getDocument from "@/composables/getDocument";
import getUser from "@/composables/getUser";
import { computed } from "vue";
import useStorage from "@/composables/useStorage";
import { useRouter } from "vue-router";
import AddSong from "@/components/AddSong.vue";

export default {
  props: ["id"],
  components: { AddSong },
  setup(props) {
    const { error, document: playlist } = getDocument("playlists", props.id);
    const { user } = getUser();
    const { deleteDoc, updateDoc } = useDocument("playlists", props.id);
    const { deleteImage } = useStorage();
    const router = useRouter();

    const ownership = computed(() => {
      return (
        playlist.value && user.value && user.value.uid == playlist.value.userId
      );
    });

    const handleDelete = async () => {
      await deleteImage(playlist.value.filePath);
      await deleteDoc();
      router.push({ name: "home" });
    };

    //delete song
    const handleClick = async (id) => {
      const songs = playlist.value.songs.filter((song) => song.id != id);
      await updateDoc({ songs });
    };

    return { error, playlist, ownership, handleDelete, handleClick };
  },
};
</script>

<style>
.playlist-details {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 80px;
}

h4 {
  color: #e7f0e6;
  font-family: sans-serif;
  font-weight: 400;
}
.details p {
  color: #a9ada8;
}
.cover {
  overflow: hidden;
  border-radius: 20px;
  position: relative;
  padding: 160px;
}
.cover img {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  max-width: 100%;
  max-height: 100%;
}
.playlist-info {
  text-align: center;
}
.playlist-info h2 {
  text-transform: capitalize;
  font-size: 28px;
  margin-top: 20px;
}
.playlist-info p {
  margin-bottom: 5px;
}

.description {
  text-align: left;
}
.single-song {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.delete {
  color: #ff7378;
  background-color: #2e3637;
}
.noSongs {
  color: #e7f0e6;
}
</style>