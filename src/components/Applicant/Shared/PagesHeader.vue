<template>
  <nav
    :class="
      isDarkMode
        ? 'bg-secondaryDark mb-4 px-5 py-3 rounded-md w-full'
        : 'bg-grey-100 mb-4 px-5 py-3 rounded-md w-full'
    "
    id="topNav"
  >
    <ol class="list-reset flex">
      <li>
        <router-link to="/menu">
          <a
            href="#"
            :class="
              isDarkMode && isDarkMode == true
                ? 'text-white '
                : 'text-main-400 hover:text-blue-700'
            "
            >{{ $t(path[0].name) }}</a
          >
        </router-link>
      </li>
      <li><span class="text-gray-500 mx-2">/</span></li>
      <li>
        <router-link :to="path[1].link">
          <a
            href="#"
            :class="
              isDarkMode && isDarkMode == true
                ? 'text-white '
                : 'text-main-400 hover:text-blue-700'
            "
            >{{ $t(path[1].name) }}</a
          >
        </router-link>
      </li>
      <li>
        <span
          :class="
            isDarkMode && isDarkMode == true
              ? 'text-white mx-2 '
              : 'text-main-400 mx-2'
          "
          >/</span
        >
      </li>
      <li
        :class="
          isDarkMode && isDarkMode == true
            ? 'text-yellow-300 '
            : 'text-yellow-300 hover:text-blue-700'
        "
      >
        {{ $t(path[2].name) }}
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  props: ["path", "isDarkMode"],
};
</script>
 